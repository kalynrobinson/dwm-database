import skills from "./data/skills"

const SkillAPI = {
    all: () => skills,
    get: (id) => skills.find(id.toUpperCase()),
}

export default SkillAPI
