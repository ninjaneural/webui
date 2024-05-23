import os
import ffmpeg

def extract_frames(video_path, output_dir, fps='source'):
    """
    동영상 파일로부터 프레임을 추출하여 이미지로 저장합니다.
    
    Args:
    video_path (str): 동영상 파일의 경로입니다.
    output_dir (str): 추출된 이미지를 저장할 폴더의 경로입니다.
    fps (str): 이미지 추출 시 사용할 FPS입니다. 기본값은 'source'로, 동영상의 원본 FPS를 사용합니다.
    """
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    if fps == 'source':
        # 동영상의 FPS를 가져옵니다.
        probe = ffmpeg.probe(video_path)
        video_stream = next((stream for stream in probe['streams'] if stream['codec_type'] == 'video'), None)
        fps = eval(video_stream['r_frame_rate'])

    (
        ffmpeg
        .input(video_path)
        .output(os.path.join(output_dir, '%07d.png'), vf=f'fps={fps}')
        .run(capture_stdout=True, capture_stderr=True)
    )

def process_videos(folder_path):
    """
    주어진 폴더 내의 모든 MP4 파일에 대해 작업을 수행합니다.
    
    Args:
    folder_path (str): 동영상 파일이 있는 폴더의 경로입니다.
    """
    for file in os.listdir(folder_path):
        if file.endswith('.mp4'):
            print(f'# {file}')
            video_path = os.path.join(folder_path, file)
            output_dir = os.path.join(folder_path, "extract", os.path.splitext(file)[0])
            extract_frames(video_path, output_dir)

# 사용 예
folder_path = './'  # 동영상 파일이 있는 폴더의 경로
process_videos(folder_path)
