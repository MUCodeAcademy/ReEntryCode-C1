# Dungeon Steps

This will be a somewhat randomized set of dungeon rooms where the player can fight somewhat randomized monsters.

1. Make a monster component with health/damage.
2. Make an array with three dungeon images which gets randomized to a different background.
3. Buttons for continuing the dungeon or retreating back to the town.
4. Whenever they continue it takes them to a new room and increases a room counter.
5. When they enter a room:
    - Display the monster with their health/damage.
    - Two buttons to attack or retreat.
    - If they attack, take the monster's health and subtract it by the player's damage.
    - When the monster's health reaches 0, it takes them to the next room.
    - If they retreat, navigate them back to the town.