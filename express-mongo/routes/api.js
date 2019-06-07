const express = require('express')
const router = express.Router()

const Profile = require('../models/Profile')

router.get('/profile', (req, res) => {
	let filters = req.query

	console.log("req.query is=", req.query)

	if (req.query.age != null){
		filters = {
			age: {$gt: req.query.age}
		}
	}

	Profile.find(filters)
	.then(profiles => {
		res.json({
			confirmation: 'success',
			data: profiles
		})
	})
	.catch(err => {
		res.json({
			confirmation: 'fail',
			message: err.message
		})
	})
})

router.put('/profile/:id', (req, res) => {
		const query = req.query;
		const profileId = req.params.id;

		// update
		Profile.findByIdAndUpdate(profileId, query, {new:true})
		.then(profile => {
			res.json({
				confirmation: 'success',
				data: profile
			})
		})
		.catch(err => {
			res.json({
				confirmation: 'Fail',
				data: err.message
			})
		})
})

router.delete('/profile/:id', (req, res) => {
		const profileId = req.params.id;
console.log("****** req.params " + req.params.id);

		// remove
		Profile.findByIdAndRemove(profileId)
		.then(data => {
			res.json({
				confirmation: 'success',
				data: "profile " + profieId + " removed"
			})
		})
		.catch(err => {
			res.json({
				confirmation: 'Fail',
				data: err.message
			})
		})
})

router.get('/profile/:id', (req, res) => {
		const id = req.params.id;

		Profile.findById(id).then( profile => {
				res.json({
						confirmation: 'success',
						data: profile
				})
			})
		.catch(err =>{
			res.json({
					confirmation: 'fail',
					data: 'Can not find the entry with id=' + id
			})
		})
})

router.post('/profile', (req, res) => {
		// to insert into DB.
		Profile.create(req.body)
		.then(profile => {
			res.json({
				confirmation: 'success',
				data: req.profile
			})
		})
		.catch(err => {
			res.json({
				confirmation: 'Fail',
				data: err.message
			})
		})
})

module.exports = router
