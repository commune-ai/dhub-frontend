import Squad from "./Squad";

function SquadList() {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 p-3 md:p-0">
      <Squad
        name="Wat.io"
        image="/wat.png"
        description="Wat.to is improving searching in the NFT space using natural language processing models."
        tags={["Non-Fungible Tokens", "Natural Language Processing", "API"]}
        link="https://wat.to/"
      />
      <Squad
        name="Compass Labs"
        image="/compasslabs.png"
        description="Automated decision-making tools for decentralised markets on the blockchain"
        tags={["DeFi", "Finance", "Decision-making"]}
        link="http://compasslabs.ai/"
      />
      <Squad
        name="DAOKit"
        image="/daokit.png"
        description="Integrating human computation algorithms in Web3 algorithmic flows."
        tags={["Human Intelligence", "DAO"]}
        link="https://daokit.ndehouche.repl.co/"
      />
      <Squad
        name="Project Themistoklis"
        image="/themistoklis.png"
        description="Computer vision models for drones with the aim of fighting climate change and increasing food security."
        tags={["Drone", "Computer Vision", "ReGen"]}
        link="https://twitter.com/p_themistoklis"
      />
      <Squad
        name="DeepDefi"
        image="/deepdefi.png"
        description="Predictive models for borrowing cost and supply earnings of popular DeFi protocols."
        tags={["DeFi", "Predictive"]}
        link="https://forum.algovera.ai/t/predictive-model-for-borrowing-cost-earnings-gained-from-popular-defi-protocols/88"
      />
      <Squad
        name="Project Alan"
        image="/alan.png"
        description="A novel neural network architecture based on the fundamental information flows of the human brain."
        tags={["Research", "Neuroscience"]}
        link="https://forum.algovera.ai/t/project-alan-a-new-neural-network-architecture/80/2"
      />
    </div>
  );
}

export default SquadList;
