from fastapi import APIRouter
from typing import Optional

router=APIRouter(
    prefix="/orders",
    tags=["Order"]
)

@router.get("/all")
def get_user():
    return {"msg":f"All Orders"}
