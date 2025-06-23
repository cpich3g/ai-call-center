from typing import Optional
from .call_metrics import CallMetrics

class MetricsManager:
    def __init__(self):
        self.current: Optional[CallMetrics] = None
        self.call_count = 0

    def start_call(self):
        self.current = CallMetrics()
        self.call_count += 1

    def end_call(self):
        self.current = None

    def add_transcript(self, text: str):
        if self.current:
            self.current.add_text(text)

    def get_metrics(self):
        if self.current:
            data = self.current.to_dict()
            data["call_count"] = self.call_count
            return data
        return {"call_count": self.call_count}

metrics_manager = MetricsManager()
