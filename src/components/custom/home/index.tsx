import ContributorController from "@/controllers/contributor-controller";

const Home = async () => {
  const contributors = await ContributorController.getContributorsInfo(
    "minhtringuyen31",
    "mobile_app_20KTPM01"
  );

  console.log(contributors);
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
