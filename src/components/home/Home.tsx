import Container from "@/common/Container"
import Image from "next/image"
import HomeBg from "./static/block.png"
import Image01 from "./static/home01.png"
import Image02 from "./static/home02.png"

export function Home() {
	return(
		<section className="relative">
			<Image src={HomeBg}   className="absolute left-0 top-0 w-[27%] h-full object-cover z-0" alt="Block"/>
			<Container>
				<div className="py-52 px-12 text-white flex justify-between">
					<div className="relative flex gap-5 max-w-[566px]">
						<Image src={Image01} alt="HomeImg"/>
						<Image src={Image02} alt="HomeImg"/>
					</div>
					<div className="flex flex-col gap-y-11 max-w-xl pl-6">
						<h1 className="font-semibold text-8xl">Buy and Sell Digital Arts</h1>
						<p className="text-2xl leading-tight tracking-[0.36px]">The world’s largest online marketplace of online digital art </p>
						<h4 className="font-bold text-xl">Explore</h4>
						<div className="flex justify-between gap-y-2 gap-x-12">
							<div>
								<span className="text-4xl font-semibold">999,000</span>
								<p className="text-xl font-medium">Digital art file</p>
							</div>
							<div>
								<span className="text-4xl font-semibold">2,000</span>
								<p className="text-xl font-medium">Art Seller</p>
							</div>
							<div>
								<span className="text-4xl font-semibold">10,000</span>
								<p className="text-xl font-medium">Buyer</p>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</section>
	)
}