def clean_text(text):
    return text.lower().strip()

def is_long_prompt(text):
    c=0
    for i in text:
        c+=1
    if c>20:
        return True
    else:
        return False