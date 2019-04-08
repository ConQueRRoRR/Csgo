const express = require('express');
const app = express();
const weaponRoute = express.Router();

// Require weapon model in our routes module
let  weapon= require('../models/weaponSchema');

// Defined store route
weaponRoute.route('/add').post(function (req, res) {
  console.log("node add route");
  let Weapon = new weapon(req.body);
  Weapon.save()
    .then(Weapon => {
      res.status(200).json({'Weapon': 'Weapon in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
weaponRoute.route('/').get(function (req, res) {
    weapon.find(function (err, Weapons){
    if(err){
      console.log(err);
    }
    else {
      res.json(Weapons);
    }
  });
});

// // Defined edit route
weaponRoute.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  weapon.findById(id, function (err,weapons){
      res.json(weapons);
  });
});

// //  Defined update route
weaponRoute.route('/update/:id').post(function (req, res) {
  console.log("updating");
  weapon.findById(req.params.id, function(err, weapons) {
    if (!weapons){
      console.log(err);
      console.log(req.params.id);
      }
    else {
        weapons.weapon_name = req.body.weapon_name;
        weapons.weapon_damage = req.body.weapon_damage;
        weapons.weapon_recoil = req.body.weapon_recoil;
        weapons.weapon_FireRate = req.body.weapon_FireRate;
        weapons.weapon_mobility = req.body.weapon_mobility;
        weapons.save().then(Weapon => {res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
  console.log(req.params.id);
});
// });

// Defined delete | remove | destroy route
weaponRoute.route('/delete/:id').get(function (req, res) {
  console.log(req.params.id);  
  weapon.findByIdAndRemove({_id: req.params.id}, function(err, business){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = weaponRoute;