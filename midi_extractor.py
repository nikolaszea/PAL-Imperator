import argparse
from basic_pitch.inference import predict_and_save

def extract_midi(input_path, output_path):
    predict_and_save([input_path], output_directory=output_path)

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description='Extract MIDI from audio file.')
    parser.add_argument('input', type=str, help='Path to the input audio file')
    parser.add_argument('output', type=str, help='Path to the output directory for MIDI file')
    args = parser.parse_args()

    extract_midi(args.input, args.output)
