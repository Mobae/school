const teacher = async (req, res, next) => {
  const { rank } = req.body.data;
  if (rank === "1") {
    next();
  } else {
    res.status(401).json({
      msg: "Unauthorized",
    });
  }
};

const admin = async (req, res, next) => {
  const { rank } = req.body.data;
  console.log(rank);
  if (rank == "2") {
    next();
  } else {
    res.status(401).json({
      msg: "Unauthorized",
    });
  }
};

module.exports = { teacher, admin };
