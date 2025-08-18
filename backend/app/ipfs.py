import base64
import json
from typing import Dict, Any, Optional
import logging

import requests

from .config import settings


logger = logging.getLogger(__name__)


def store_trade_proof(document: Dict[str, Any]) -> Optional[str]:
    if not settings.web3_storage_token:
        return None
    try:
        data_bytes = json.dumps(document, separators=(",", ":")).encode("utf-8")
        headers = {
            "Authorization": f"Bearer {settings.web3_storage_token}",
        }
        files = {
            "file": ("proof.json", data_bytes, "application/json"),
        }
        resp = requests.post(
            "https://api.web3.storage/upload",
            headers=headers,
            files=files,
            timeout=20,
        )
        resp.raise_for_status()
        cid = resp.json().get("cid")
        return cid
    except Exception as exc:
        logger.exception("Failed to store trade proof: %s", exc)
        return None

