import './projectStyle.scss'

function Project(){

    let elemInfo = [
        {
            title: 'SPACE Launches Simple Nightshade: The First Step Towards a Sharded Blockchain',
            postData: 'MARCH 23, 2022 — SPACE TEAM',
            textOne: 'SPACE is launching phase 0 of its roadmap towards a fully sharded blockchain. This phase, nicknamed Simple Nightshade, will kickstart a year of changes and additions to the SPACE blockchain that when complete, will make it super-fast, incredibly secure, and capable of onboarding millions of users into the world of Web3 without skipping a beat. ',
            textTwo: 'Since SPACE released the design for the protocol back in 2019, it was always designed to be a sharded blockchain. However, when we were preparing for the launch in early 2020, we realized that there was no need to launch a completely sharded network. Sharding is a very complex piece of technology, and the network was brand new. It didn’t need to be capable of handling hundreds of millions of transactions at launch. ',
            textThree: 'We decided to focus on the stability of the network first and launch sooner, so developers and entrepreneurs can start building on the SPACE Mainnet as soon as possible. However, after a few months, demand shot up. ',
            textFour: 'We have seen the average number of daily transactions rising to 300k. With the emergence of more and more projects building on SPACE, the number of transactions is only going to increase in the coming months. While the network is still currently using only 5% of the total capacity, we wanted to start the transition to sharding now to avoid any unpleasant surprises and ensure we can support all the applications on SPACE.',
            textFive: 'Like with our mainnet launch, we’ve taken a cautious and pragmatic approach to roll out any new features on SPACE to ensure our community is able to keep building without losing key functionality. As a result, we have created a four-stage rollout of sharding, which we’ve detailed below.',
            id: 0
        }
    ]

    let elemInfoReflection = elemInfo.map((item) =>(
        <div className='project__wrapper-introduction-inner' key={item.id}>
            <div className='project__wrapper-introduction-inner-title'>
                    <h3>{ item.title }</h3>
            </div>
            <div className='project__wrapper-introduction-inner-data-post'>
                    <h5>{ item.postData }</h5>
            </div>
            <div className='project__wrapper-introduction-inner-text'>
                    <p>{ item.textOne }</p>
                    <p>{ item.textTwo }</p>
                    <p>{ item.textThree }</p>
                    <p>{ item.textFour }</p>
                    <p>{ item.textFive }</p>
            </div>
        </div>
    ))

    let developmentPlan = [
        {
            title: 'Phase 0: Simple Nightshade',
            subTitle: 'Increasing the Throughput of the Network',
            textFirst: 'In this initial phase, we will shard the state, but not processing. We are going to split the current state into four shards while still having all validators track all shards. Nonetheless, the throughput of the Network will significantly increase.',
            textSecond: 'In this step, we have built a mechanism to split a shard into multiple parts through live upgrades, which will serve as the foundation for dynamic resharding in the future. Meanwhile, because every shard is still validated by all validators, the safety guarantees remain the same. We plan to launch phase 0 in November 2021.',
            id: 0   
        },
        {
            title: 'Phase 1: Chunk-Only Producers',
            subTitle: 'Further Decentralizing the Network',
            textFirst: 'In this phase, we introduce a new role: chunk-only producers, who only validate one shard. They produce chunks (shard blocks) for some specific shard and only need to run inexpensive hardware. Because they neither produce blocks nor contribute to the approvals, the security of the chain is not affected. ',
            textSecond: 'The introduction of chunk-only producers also helps increase the total number of validators and improve the decentralization of SPACE as a whole. Once this phase is complete, we will have 200-400 validators and only a fraction of them (block producers) need to run more expensive hardware. We expect to deliver phase 1 in January 2022.',
            id: 1
        },
        {
            title: 'Phase 2: Nightshade',
            subTitle: 'Increasing the Accessibility for Validators',
            textFirst: 'In this phase, we finish the implementation of challenges, thereby eliminating the need for any validators to track all the shards. Once this step is completed, both state and processing will be fully sharded. This will also further lower the hardware requirements of running a block producer on SPACE, making the network more accessible for validators. We expect to deliver phase 2 in Q3 2022.',
            textSecond: null,
            id: 2
        },
        {
            title: 'Phase 3: Dynamic Resharding',
            subTitle: 'Unlocking SPACE to Infinite Scale',
            textFirst: 'After phase 2 is complete, we will have a fully functional sharded mainnet with a fixed number of shards. In phase 3, we want to expand on that and create the ability for the network to dynamically split and merge shards based on resource utilization. This will make SPACE almost infinitely more scalable and resilient to short-term usage spikes. We expect to deliver phase 3 in Q4 2022.', 
            textSecond: 'Sharding is not the final phase of evolution for SPACE Protocol. Rather, we hope it’s just the beginning. We are simultaneously working on a number of improvements on the protocol level to build a secure, developer-friendly, and scalable blockchain that can support mainstream usage and adoption. ',
            id: 3
        },
    ]

    let elemDevelopmentPlan  = developmentPlan.map((item) =>(
        <div className='project__wrapper-information-inner' key={item.id}>
            <div className='project__wrapper-information-inner-title'>
                <h3>{ item.title }</h3>
                <h4>{ item.subTitle }</h4>
            </div>
            <div className='project__wrapper-information-inner-text'>
                <p>{item.textFirst}</p>
                <p>{item.textSecond}</p>
            </div>
        </div>
    ))

    return(
        <div className='project'>
            <div className='container'>
                <div className='project__wrapper'>
                    <div className='project__wrapper-title'>
                        <h3>About technology</h3>
                    </div>
                    <div className='project__wrapper-introduction'>
                        { elemInfoReflection }
                    </div>
                    <div className='project__wrapper-information'>
                        { elemDevelopmentPlan }
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Project;