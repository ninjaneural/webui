import os
import glob
import re
import sys

def rename_all(basepath):
    print("> rename_all")
    files = glob.glob(basepath)
    print(f"> {len(files)}")
    for element in files:
        dir, name = os.path.split(element)
        name_split = name.split("-")
        prefix = name_split[0]
        post = name_split[1] if len(name_split) > 1 else None
        if prefix and post:
            newname = post
            print(newname)
            os.rename(os.path.join(dir, name), os.path.join(dir, newname))

if __name__=='__main__':
    print("# rename frames")
    print("python rename.py [path]")
    print("ex) python rename.py D:/work/weather/output/*.png")
    argument = sys.argv
    if len(argument) > 1:
        # execute functions
        rename_all(argument[1])

