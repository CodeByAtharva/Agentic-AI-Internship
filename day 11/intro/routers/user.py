from fastapi import APIRouter
from typing import Optional
router=APIRouter(
    prefix="/user",
    tags=["User"]
)



@router.get("/all")
def get_user():
    return {"msg":f"All Users"}
