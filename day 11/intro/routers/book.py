from fastapi import APIRouter
from typing import Optional
from pydantic import BaseModel

router=APIRouter(
    prefix="/book",
    tags=["Books"]
)

class BookModel(BaseModel):
    title:str
    author:str
    price:float
    in_stock: Optional[bool]=True


# Task 1: Update Book Details

@router.get("/{book_id}")
def get_book(
    book_id:int,
    book:BookModel,
    available:Optional[bool]=True
):
    
    return {
        "book_id": book_id,
        "available": available,
        "book": book,
        "message": "Book updated successfully!"
    } 


# Task 2: Create User Profile With Validation


class UserModel(BaseModel):
    name: str
    age: int 
    email: str



@router.post("/users/create")
def create_user(
    user: UserModel,
    send_welcome_email: bool = True
):
    if user.age>=18:
      return {
          "user": user,
          "send_welcome_email": send_welcome_email,
          "message": "User created successfully!"
      }
    else:
        return {
            "error": "User must be at least 18 years old."
        }



# Task 3: Order Checkout API


class OrderModel(BaseModel):
    item_name: str
    quantity: int
    price_per_item: float


@router.post("/orders/{order_id}")
def place_order(
    order_id: int,
    order: OrderModel ,
    express_delivery: bool = False
):
    total_amount = order.quantity * order.price_per_item

    return {
        "order_id": order_id,
        "express_delivery": express_delivery,
        "total_amount": total_amount,
        "order": order,
        "message": "Order placed successfully!"
    }