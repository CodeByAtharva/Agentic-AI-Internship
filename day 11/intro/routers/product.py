from fastapi import APIRouter
from typing import Optional
router=APIRouter(
    prefix="/products",
    tags=["Product"]
)


@router.get("/")
def get_products(
    cat: Optional[str]=None,
    page: Optional[int]=1
):
    return {"msg":f"products of the cat {cat} of page {page}"}