from pydantic import BaseModel

class AnalyseRequest(BaseModel):
    cv_text: str
    job_description: str


class AnalyseResponse(BaseModel):
    feedback : str
    cv: str
    cover : str



