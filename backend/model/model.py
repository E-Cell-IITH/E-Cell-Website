from pydantic import BaseModel

class data(BaseModel):
    name: str
    phone: int
    email: str
    year: int
    school: str
    experience: int
    committee: str
    country: str