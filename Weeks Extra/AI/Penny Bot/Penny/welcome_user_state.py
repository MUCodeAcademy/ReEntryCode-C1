# Stores information about whether the bot has sent its 'welcome' message.
class WelcomeUserState:
    def __init__(self, did_welcome: bool = False):
        self.did_welcome_user = did_welcome