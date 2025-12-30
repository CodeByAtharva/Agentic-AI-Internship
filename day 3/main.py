from prompt_utils import clean_text, is_long_prompt

text=" Write a detailed blog on Generative AI in simple words "
print(f"Cleaned text: {clean_text(text)}")


if is_long_prompt(text):   
    print(f"it's long")
else:
    print(f"it's not long")
