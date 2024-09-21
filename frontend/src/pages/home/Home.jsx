import MessageContainer from "../../components/messages/MessageContainer";
import Navbar           from "../../components/Navbar";
import Sidebar          from "../../components/sidebar/Sidebar";

const Home = () => {
	return (
		<>
			<Navbar />
			<div className="flex h-[calc(100vh-80px)] w-full mt-20 rounded-lg overflow-hidden bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
				<Sidebar />
				<MessageContainer />
			</div>
		</>
	);
};
export default Home;
