import socket


def has_internet(timeout_seconds: float = 1.5) -> bool:
    try:
        socket.setdefaulttimeout(timeout_seconds)
        with socket.create_connection(("1.1.1.1", 53), timeout=timeout_seconds):
            return True
    except Exception:
        return False

