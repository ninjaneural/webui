if [ $2 == True ]; then
  mkdir /content/drive/MyDrive/$3
  mkdir /content/drive/MyDrive/$3/output
  mkdir /content/drive/MyDrive/$3/checkpoint
  mkdir /content/drive/MyDrive/$3/lora
  mkdir /content/drive/MyDrive/$3/lycoris
  mkdir /content/drive/MyDrive/$3/embedding
  mkdir /content/drive/MyDrive/$3/hypernetwork
  mkdir /content/drive/MyDrive/$3/wildcards
  mkdir /content/$1/models/loras
  mkdir /content/$1/models/hypernetworks
  rm /content/$1/models/embeddings/google
  rm /content/$1/models/checkpoints/google
  rm /content/$1/models/loras/google
  rm /content/$1/models/hypernetworks/google
  rm /content/$1/output
  mv /content/$1/output /content/$1/output_backup
  ln -sf /content/drive/MyDrive/$3/embedding /content/$1/models/embeddings/google
  ln -sf /content/drive/MyDrive/$3/checkpoint /content/$1/models/checkpoints/google
  ln -sf /content/drive/MyDrive/$3/lora /content/$1/models/loras/google
  ln -sf /content/drive/MyDrive/$3/hypernetwork /content/$1/models/hypernetworks/google
  ln -sf /content/drive/MyDrive/$3/output /content/$1/output
fi