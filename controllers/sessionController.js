const express = require("express");

const router = express.Router();
const Session = require("../models/session");
const theOther = require('../models')

router.get("/", (req, res) => {
	Session.find({})
		.then((sessions) => {
			console.log(sessions);
			res.json(sessions);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).end();
		});
});
// created for edit (el)
router.get("/:id", (req, res) => {
	console.log(req.params.id);
	Session.findById(req.params.id)

	// .populate("tutor")

		.then((foundSession) => {
			res.json(foundSession);
		})
		.catch((err) => {
			console.log(err);
			res.status(404).end();
		});
});

router.get("/:id", (req, res) => {
	Session.find({
		where: {
			id: req.params.id,
		},
	})
		// .populate("tutor")
		.then((sessions) => {
			res.json(sessions);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).end();
		});
});

router.post("/", (req, res) => {
	console.log(req.body);
	Session.create(req.body)
		// .populate("tutor")
		.then((newSession) => {
			console.log(newSession);
			res.json(newSession);
		})
		.catch((err) => {
			console.log(err);
		});
});

router.put("/:id", (req, res) => {
	Session.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
		(updatedObject) => {
			res.json(updatedObject);
		}
	);
});

router.delete("/:id", (req, res) => {
	Session.findByIdAndDelete(req.params.id).then((result) => {
		res.json(result);
	});
});


// Tester Router
router.get("/apple/:id", (req, res)=> {
	theOther.Tutor.findOne({
		_id: req.params.id
	})
	.populate('session')
	.then((dbSession)=> {
		//console.log(theOther.Session.SessionSchema)
		res.json(dbSession)
	})
	.catch((err)=>{
		console.log(err)
	});
})

//testing post method with specifc id's to later render object 
router.post("/applepie/:id", (req, res )=> { 
	theOther.Session.create
(req.body)
.then((createdSession)=> {
	return theOther.Tutor.findByIdAndUpdate({_id: req.params.id}, {session: createdSession._id}, {new: true})
}).then((theTutor)=>{
	res.json(theTutor)
})
.catch((err)=>{
	res.json(err)
})

})





module.exports = router;
