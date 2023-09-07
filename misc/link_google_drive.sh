if [ $2 == True ]; then
  mkdir /content/drive/MyDrive/$3
  mkdir /content/drive/MyDrive/$3/output
  mkdir /content/drive/MyDrive/$3/checkpoint
  mkdir /content/drive/MyDrive/$3/lora
  mkdir /content/drive/MyDrive/$3/lycoris
  mkdir /content/drive/MyDrive/$3/embedding
  mkdir /content/drive/MyDrive/$3/hypernetwork
  mkdir /content/drive/MyDrive/$3/wildcards
  if [ "$4" ]; then
    mkdir /content/drive/MyDrive/$3/$4
    wget https://raw.githubusercontent.com/ninjaneural/webui/master/misc/example/install.sh -nc -O /content/drive/MyDrive/$3/$4/install.sh
  fi
  mkdir /content/$1/models/Lora
  mkdir /content/$1/models/LyCORIS
  mkdir /content/$1/models/hypernetworks
  rm /content/$1/embeddings/google
  rm /content/$1/models/Stable-diffusion/google
  rm /content/$1/models/Lora/google
  rm /content/$1/models/LyCORIS/google
  rm /content/$1/models/hypernetworks/google
  rm /content/$1/outputs
  mv /content/$1/outputs /content/$1/outputs_backup
  rm /content/$1/extensions/sd-dynamic-prompts/wildcards
  mv /content/$1/extensions/sd-dynamic-prompts/wildcards /content/$1/extensions/sd-dynamic-prompts/wildcards_backup
  ln -s /content/drive/MyDrive/$3/embedding /content/$1/embeddings/google
  ln -s /content/drive/MyDrive/$3/checkpoint /content/$1/models/Stable-diffusion/google
  ln -s /content/drive/MyDrive/$3/lora /content/$1/models/Lora/google
  ln -s /content/drive/MyDrive/$3/lycoris /content/$1/models/LyCORIS/google
  ln -s /content/drive/MyDrive/$3/hypernetwork /content/$1/models/hypernetworks/google
  ln -s /content/drive/MyDrive/$3/output /content/$1/outputs
  ln -s /content/drive/MyDrive/$3/wildcards /content/$1/extensions/sd-dynamic-prompts/wildcards
fi
