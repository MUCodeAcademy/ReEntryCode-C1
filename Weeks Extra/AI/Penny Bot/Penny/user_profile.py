# Stores information about the user.
# Currently, it's only used to store the user's name.
class UserProfile:
    def __init__(self, name: str = None):
        self.name = name