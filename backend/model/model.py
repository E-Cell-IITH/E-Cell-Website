from pydantic import BaseModel

class Data(BaseModel):
    name: str
    phone: int
    email: str
    year: int
    school: str
    experience: int
    committee: str
    country: str

class RazorPaySuccess(BaseModel):
    order_id:str
    razorpayPaymentId : str
    razorpayOrderId : str
    razorpaySignature : str
    data: Data