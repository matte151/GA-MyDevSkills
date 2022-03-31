const players = [
	{id: 1, player: 'Mike', strength: 47, dexterity: 29, constitution: 43, intelligence: 28, wisdom: 21, charisma: 23, weaponSkill: 52, balisticSkill: 55},
	{id: 2, player: 'LT', strength: 44, dexterity: 36, constitution: 46, intelligence: 14, wisdom: 14, charisma: 12, weaponSkill: 51, balisticSkill: 46},
	{id: 3, player: 'Karnor', strength: 10, dexterity: 18, constitution: 12, intelligence: 47, wisdom: 31, charisma: 20, weaponSkill: 26, balisticSkill: 40},
  {id: 4, player: 'Ackirta', strength: 13, dexterity: 55, constitution: 13, intelligence: 16, wisdom: 13, charisma: 14, weaponSkill: 50, balisticSkill: 62},
  {id: 5, player: 'Hoolon', strength: 12, dexterity: 12, constitution: 10, intelligence: 54, wisdom: 29, charisma: 31, weaponSkill: 20, balisticSkill: 20},
  {id: 6, player: 'Nihles', strength: 43, dexterity: 35, constitution: 40, intelligence: 26, wisdom: 17, charisma: 29, weaponSkill: 69, balisticSkill: 30},
  {id: 7, player: 'Ray', strength: 44, dexterity: 38, constitution: 44, intelligence: 13, wisdom: 16, charisma: 12, weaponSkill: 50, balisticSkill: 60}
  ];
  
  module.exports = {
	getAll,
	getOne,
	create,
  deleteRecord,
  update
  };
  
  function getAll() {
	return players;
  }
 
  function getOne(id) {
	// player in find could be anything... could also run == instead of doing a parseInt, not sure which is better...
	return players.find(player => player.id === parseInt(id));
  }

  function create(player) {
	// Add the id
  	player.id = players.length+1;
  //let's try to get other stats from a form... but set them all to 10 at first, if they don't have special stats they must be average...
    player.strength=10;
    player.dexterity=10;
    player.constitution = 10;
    player.intelligence = 10;
    player.wisdom = 10;
    player.charisma = 10;
    player.weaponSkill = 10;
    player.balisticSkill = 10;
	  players.push(player);
  }

  function deleteRecord(id){
    const playerRecord = players.findIndex(player => player.id === parseInt(id));
    players.splice(playerRecord,1)
  }

  function update(id, player) {
    const idx = players.findIndex((record) => record.id === parseInt(id));
    player.id=parseInt(id);
    players.splice(idx, 1, player)
  }