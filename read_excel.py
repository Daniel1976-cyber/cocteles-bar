import pandas as pd
import json

try:
    df = pd.read_excel('cocteles.xlsx')
    data = df.to_dict(orient='records')
    print(json.dumps(data, indent=2, ensure_ascii=False))
except Exception as e:
    print(f"Error: {e}")
