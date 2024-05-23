import os
import shutil
from PIL import Image
import subprocess
import math
import glob

def blend_images(image1, image2, alpha=0.5):
    """두 이미지를 블렌딩합니다."""
    return Image.blend(image1, image2, alpha)

def process_images(source_dir, target_dir, max_images, video_output, fps, sound_file):
    """지정된 폴더에서 이미지를 처리하고 동영상으로 변환합니다."""
    if not os.path.exists(target_dir):
        os.makedirs(target_dir)
    else:
        shutil.rmtree(target_dir)
        os.makedirs(target_dir)

    group_images = []
    for subdir, _, files in os.walk(source_dir):
        if subdir != source_dir:
            images = [os.path.join(subdir, f) for f in sorted(files) if f.lower().endswith(('png', 'jpg', 'jpeg'))]
            group_images.append((subdir, images))

    image_counter = 0
    blend_next = []
        
    for idx, (subdir, images) in enumerate(group_images):
        print(f"# {subdir}")
        extra_image_count = len(blend_next)

        if max_images == 0:
            curr_max_images = math.floor(len(images) / 10) * 10
            print(f"auto max_images: {curr_max_images}")
        else:
            curr_max_images = max_images
    
        # 현재 하위 목록이 마지막인지 확인
        is_last_sublist = idx == len(group_images) - 1

        extra_image_count = len(blend_next)
        for i, image_path in enumerate(images):
            print(f" - {image_path}")
            if is_last_sublist or i < curr_max_images:
                if len(blend_next) > 0:
                    opacity = 1 - (extra_image_count + 1 - len(blend_next))/(extra_image_count+1)
                    with Image.open(image_path) as img1, Image.open(blend_next.pop(0)) as img2:
                        blended = blend_images(img1, img2, opacity)
                        blended.save(os.path.join(target_dir, f"{image_counter+1:07d}.png"))
                else:
                    #os.rename(image_path, os.path.join(target_dir, f"{image_counter+1:07d}.png"))
                    shutil.copy(image_path, os.path.join(target_dir, f"{image_counter+1:07d}.png"))
                image_counter += 1
            else:
                blend_next.append(image_path)

    # FFmpeg를 사용하여 동영상 생성
    if video_output:
        if sound_file and os.path.isfile(sound_file):
            ffmpeg_command = f"ffmpeg -framerate {fps} -i {target_dir}/%07d.png -i {sound_file} -c:a copy -c:v libx264 -pix_fmt yuv420p -map 0:v -map 1:a {video_output}"
        else:
            ffmpeg_command = f"ffmpeg -framerate {fps} -i {target_dir}/%07d.png -c:v libx264 -pix_fmt yuv420p {video_output}"
        subprocess.run(ffmpeg_command, shell=True)

# 사용 예
source_dir = './extract'  # 소스 폴더 경로
target_dir = './combine_old'  # 타겟 폴더 경로

video_output = 'output_video.mp4'  # 출력 동영상 파일 이름
max_images_per_folder = 0  # 폴더당 최대 이미지 수, 0 이면 10의 배수로 자동 설정
fps = 30
sound_file = "sound.mp4" # 사운드파일 mp3, mp4등 

process_images(source_dir, target_dir, max_images_per_folder, video_output, fps, sound_file)
