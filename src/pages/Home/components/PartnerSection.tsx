import Button from "components/Button/Button"


function PartnerSection() {
    return (
    <div className="bg-[url('/assets/partner.png')] bg-image text-white flex items-center justify-center">
        <div className="lg:w-[min(80%,80rem)] flex flex-col items-center lg:items-start justify-center text-center lg:text-left px-10 py-14 gap-10 lg:p-24 lg:gap-12">
            <h2 className="">We would love to partner with you</h2>
            <p className="">
                Partnering with NXT Gen Veterans offers a unique opportunity to make a tangible 
                difference in the lives of military veterans transitioning to civilian life. 
                By joining forces with us, you can amplify your impact and contribute to the 
                empowerment, education, and support of those who have bravely served our country. 
                You may have resources that we may not have. 
                Together, we can create meaningful change, build stronger communities, 
                and honor the sacrifices of our veterans. 
                Partner with us and be a part of a movement that transforms lives and 
                fosters a brighter future for those who have served. 
                We would love to get in touch with you to make this happen.
            </p>
            <Button link="/contact/partner">Get in touch</Button>
        </div>
    </div>
    )
}

export default PartnerSection