import pickle
import time

with open("book.pickle", "rb") as f:
      new_book = pickle.load(f)

print(new_book)