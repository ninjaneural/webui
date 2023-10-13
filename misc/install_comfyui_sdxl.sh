git clone https://github.com/comfyanonymous/ComfyUI /content/$1
cd /content/$1
pip install xformers!=0.0.18 -r requirements.txt --extra-index-url https://download.pytorch.org/whl/cu118 --extra-index-url https://download.pytorch.org/whl/cu117
