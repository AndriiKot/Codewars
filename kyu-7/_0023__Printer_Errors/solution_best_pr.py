from re import sub

def printer_error(s):
    return "{}/{}".format(len(sub("[a-m]",'',s)),len(s))
