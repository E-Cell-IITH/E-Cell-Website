from dotenv import load_dotenv
import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from model.model import data,razorPay_success
import razorpay

app = FastAPI()
load_dotenv()

origins = ["http://localhost:3000"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def get():
    return {"hello":"world"}

@app.post("/mun")
def handleFormSubmit(d: data):
    print(d)
    return {"Done"}

@app.get('/payment/orders')
def create_order():
    client = razorpay.Client(auth=(os.getenv('KEY_ID'), os.getenv('KEY_SECRET')))
    data = { "amount": 500, "currency": "INR", "receipt": "order_rcptid_11" }
    payment = client.order.create(data=data)
    return payment

@app.post('/payment/success')
def handle_success(res: razorPay_success):
    order_id = res.order_id
    razor_payment_id = res.razorpayPaymentId
    razor_payment_signature = res.razorpaySignature

    client = razorpay.Client(auth=(os.getenv('KEY_ID'), os.getenv('KEY_SECRET')))

    client.utility.verify_payment_signature({
        'razorpay_order_id': order_id,
        'razorpay_payment_id': razor_payment_id,
        'razorpay_signature': razor_payment_signature
    })

    return {"msg":"success"}