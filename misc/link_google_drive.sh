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
    wget https://raw.githubusercontent.com/neuralninja22/colab/master/misc/example/install.sh -nc -O /content/drive/MyDrive/$3/$4/install.sh
  fi
  mkdir /content/$1/models/Lora
  mkdir /content/$1/models/LyCORIS
  mkdir /content/$1/models/hypernetworks
  rm /content/$1/embeddings/google
  rm /content/$1/models/Stable-diffusion/google
  rm /content/$1/models/Lora/google
  rm /content/$1/models/LyCORIS/google
  rm /content/$1/models/hypernetworks/google
  rm /content/$1/extensions/sd-dynamic-prompts/wildcards
  mv /content/$1/extensions/sd-dynamic-prompts/wildcards /content/$1/extensions/sd-dynamic-prompts/wildcards_backup
  ln -sf /content/drive/MyDrive/$3/embedding /content/$1/embeddings/google
  ln -sf /content/drive/MyDrive/$3/checkpoint /content/$1/models/Stable-diffusion/google
  ln -sf /content/drive/MyDrive/$3/lora /content/$1/models/Lora/google
  ln -sf /content/drive/MyDrive/$3/lycoris /content/$1/models/LyCORIS/google
  ln -sf /content/drive/MyDrive/$3/hypernetwork /content/$1/models/hypernetworks/google
  ln -sf /content/drive/MyDrive/$3/wildcards /content/$1/extensions/sd-dynamic-prompts/wildcards
  if [ -d "/content/$1/outputs" ]; then
    rm /content/$1/outputs
    mv /content/$1/outputs /content/$1/outputs_backup
    ln -sf /content/drive/MyDrive/$3/output /content/$1/outputs
  else
    rm /content/$1/output
    mv /content/$1/output /content/$1/output_backup
    ln -sf /content/drive/MyDrive/$3/output /content/$1/output
  fi
fi
