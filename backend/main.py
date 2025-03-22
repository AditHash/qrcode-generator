from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import qrcode
from io import BytesIO
import base64
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Allow your React frontend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Request model
class QRCodeRequest(BaseModel):
    text: str

# Endpoint to generate QR code
@app.post("/generate-qr")
async def generate_qr(request: QRCodeRequest):
    text = request.text

    if not text:
        raise HTTPException(status_code=400, detail="Text is required")

    try:
        # Generate QR code
        qr = qrcode.QRCode(
            version=1,
            error_correction=qrcode.constants.ERROR_CORRECT_L,
            box_size=10,
            border=4,
        )
        qr.add_data(text)
        qr.make(fit=True)

        # Create an image from the QR code
        img = qr.make_image(fill_color="black", back_color="white")

        # Convert the image to a base64-encoded string
        buffered = BytesIO()
        img.save(buffered, format="PNG")
        img_str = base64.b64encode(buffered.getvalue()).decode()

        return {"qr_code": f"data:image/png;base64,{img_str}"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to generate QR code: {str(e)}")

# Run the application
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)