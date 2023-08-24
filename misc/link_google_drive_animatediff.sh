if [ $2 == True ]; then
  mkdir /content/drive/MyDrive/$3
  mkdir /content/drive/MyDrive/$3/output
  mkdir /content/drive/MyDrive/$3/checkpoint
  mkdir /content/drive/MyDrive/$3/wildcards
  rm /content/$1/embeddings
  rm /content/$1/data/models/sd
  rm /content/$1/output
  ln -s /content/drive/MyDrive/$3/embedding /content/$1/embeddings
  ln -s /content/drive/MyDrive/$3/checkpoint /content/$1/data/models/sd
  ln -s /content/drive/MyDrive/$3/lora /content/$1/data/models/lora
  ln -s /content/drive/MyDrive/$3/output /content/$1/output
fi