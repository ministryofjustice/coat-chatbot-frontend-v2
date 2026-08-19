from markupsafe import escape

def validate_query(query):
    if not query or not isinstance(query, str):
        return False

    sanitized_query = str(escape(query.strip()))

    return sanitized_query
