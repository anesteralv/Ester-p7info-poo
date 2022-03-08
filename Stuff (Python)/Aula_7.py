import pickle
import time
book = {}
book['added-at'] = time.strptime('Fri Mar 27 22:20:42 2009')
book['author'] = 'Kurose, James F. and Ross, Keith W.'
book['description'] = 'Computer Networking'
book['edition'] = '5'
book['isbn'] = '97803948934892'
with open('book.pickle', 'wb') as f:
    pickle.dump(book, f)