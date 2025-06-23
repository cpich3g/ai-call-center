import time
from textblob import TextBlob

class CallMetrics:
    def __init__(self):
        self.start_time = time.time()
        self.transcript = []
        self.sentiment = 0.0

    def add_text(self, text: str):
        if text:
            self.transcript.append(text)
            self.sentiment = TextBlob(text).sentiment.polarity

    @property
    def duration(self) -> float:
        return time.time() - self.start_time

    def to_dict(self):
        return {
            "duration": self.duration,
            "sentiment": self.sentiment,
            "transcript": " ".join(self.transcript)
        }
