from fastapi import FastAPI
from typing import Optional
from routers import order,product,user,book

app = FastAPI()

@app.get("/")
def root():
    return {"msg":"hello..!"}

@app.get("/home/all")
def get_user():
    return {"msg":f"All users"}



@app.get("/home/{username}/{post_id}")
def get_post(username:str,post_id:int):
    return {"msg":f"Welcome {username} of {post_id}"}


app.include_router(order.router)
app.include_router(user.router)
app.include_router(product.router)
app.include_router(book.router)
