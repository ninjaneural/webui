import os
import shutil
from PIL import Image
import subprocess


def process_images(target_dir, video_output, fps, sound_file):
    # FFmpeg를 사용하여 동영상 생성
    if sound_file:
        ffmpeg_command = f"ffmpeg -framerate {fps} -i {target_dir}/%07d.png -i {sound_file} -c:a copy -c:v libx264 -pix_fmt yuv420p -map 0:v -map 1:a {video_output}"
    else:
        ffmpeg_command = f"ffmpeg -framerate {fps} -i {target_dir}/%07d.png -c:v libx264 -pix_fmt yuv420p {video_output}"
    
    subprocess.run(ffmpeg_command, shell=True)

# 사용 예
target_dir = './combine'  # 타겟 폴더 경로
video_output = 'output_video2.mp4'  # 출력 동영상 파일 이름
fps = 30
sound_file = "sound.mp4"

process_images(target_dir, video_output, fps, sound_file)
