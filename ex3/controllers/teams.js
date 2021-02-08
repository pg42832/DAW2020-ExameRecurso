const Team = require("../models/teams");


module.exports.list = ()=>{
    return Team.aggregate([
        {
            $project: {
                _id: 1,
                team: 1,
                pitch1:1,
                pitch2:1,
                techPitch:1,
                businessReport:1,
                techReport:1,
                nmembers: { $cond: { if: { $isArray: "$members" }, then: { $size: "$members" }, else: "NA"} }
            }
        }
    ])
        .exec()
}

module.exports.listTeam = _id => {
    return Team.findOne({ _id }).exec();
}

module.exports.remove = id => {
    return Team
        .deleteOne({_id: id})
        .exec()
}

module.exports.insert = t => {
    var novo = new Team(t)
    return novo.save()
}

module.exports.removeMember = (id,idMember) => {
    return Team.updateOne(
        { _id: id },
        { $pull: { "members" : { _id: idMember } } }
    );
}