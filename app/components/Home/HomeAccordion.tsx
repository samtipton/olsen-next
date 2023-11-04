import React from "react";
import AccordionPane, {
  AccordionPaneSegment,
} from "../AccordionPane/AccordionPane";
import classNames from "classnames";
import Image from "next/image";

const HomeAccordion = () => {
  return (
    <AccordionPane>
      <AccordionPaneSegment heading="Who Are We?" defaultOpen={true}>
        <span className={classNames("dropCap")}>O</span>lsen Park church of
        Christ is a warm congregation of Christians in Southwest Amarillo,
        Texas. We are simply Christians seeking to follow the Bible as our sole
        guide. We invite you to browse our site and come and worship with us.
        Please let us introduce ourselves&hellip;
        <Image
          src="/open-bible3.png"
          alt="open bible"
          width={120}
          height={77}
          style={{
            maxWidth: "100%",
            float: "right",
            marginLeft: "auto",
            marginBottom: "-14px",
            marginRight: "-14px",
          }}
        />
      </AccordionPaneSegment>
      <AccordionPaneSegment heading=" What We Believe">
        <span className={classNames("dropCap")}>W</span>e believe that the Bible
        is the inspired word of God (2 Timothy 3:16-17; 2 Peter 1:19-21). It was
        revealed to mankind as a guide for all things having to do with our
        lives and how we worship God (Psalm 119:105; 2 Peter 1:2-4). The Old
        Testament teaches us how God set apart a people unto Himself in order to
        bring Jesus, the Christ and Savior of the world (Galatians 3:22-25). The
        New Testament is the revealed New Covenant of Jesus Christ (Jeremiah
        31:31-34; John 12:47-48). It is the whole, complete, and final
        revelation of God and the pattern and guide for all things in this age
        (Galatians 1:8,9; 1 Corinthians 14:37; 1 Timothy 3:14-15). It is the
        Bible that reveals to us the joyous plan of the gospel of Jesus Christ
        by which we can be saved from our sins and receive eternal life with God
        in the age to come (2 Timothy 3:14-15; Romans 1:16; 1 Timothy 4:8).
        <Image
          src="/open-bible3.png"
          alt="bible"
          width={120}
          height={77}
          style={{
            maxWidth: "100%",
            width: "auto",
            height: "auto",
            float: "right",
            marginLeft: "auto",
            marginBottom: "-14px",
            marginRight: "-14px",
          }}
        />
      </AccordionPaneSegment>
      <AccordionPaneSegment heading="When You Worship With Us">
        <span className="dropCap">W</span>hen you worship with us you can expect
        a simple and friendly service focusing on Scripture and based upon the
        pattern found in the New Testament. We believe that the New Testament
        reveals how Christians worshiped in the First Century, and we seek to
        follow that pattern. In following this we sing songs of praise and
        devotion to God (Colossians 3:16; Ephesians 5:19). We pray to God, in
        the name of Jesus (Acts 2:42; John 14:13). We teach and study the Bible
        (Acts 20:7; Acts 17:11). Each Sunday we partake of the memorial of
        Jesus&apos; death, known as the <b>&quot;Lord&apos;s Supper&quot;</b>{" "}
        (Acts 20:7; Acts 2:42; 1 Corinthians 11:20, 23-26). Finally, each Sunday
        our members are given the opportunity to give back to the Lord a portion
        of the material blessings which He has given to us (1 Corinthians
        16:1-2; 2 Corinthians 9:7). Visitors are not expected to contribute.
        This is a responsibility of the members here at Olsen Park.
        <Image
          src="/open-bible3.png"
          alt="open bible"
          width={120}
          height={77}
          style={{
            maxWidth: "100%",
            width: "auto",
            height: "auto",
            float: "right",
            marginLeft: "auto",
            marginBottom: "-14px",
            marginRight: "-14px",
          }}
        />
      </AccordionPaneSegment>
      <AccordionPaneSegment heading="Our Aim">
        <span className="dropCap">T</span>he Bible tells us that when Jesus came
        He promised to build His church (Matthew 16:18). The Greek word{" "}
        <i>ekklēsia,</i> which is translated <b>&quot;church&quot;</b> refers to
        a body of people called out for a given purpose. In His death, Jesus
        purchased with His blood the &quot;called out&quot; people who look to
        Him for salvation from sin (Acts 20:28). When this glorious message of
        salvation was first preached, the Bible tells us that the Lord added to
        this church those who accepted and obeyed this message of the
        &quot;gospel&quot; or &quot;good news&quot; (Acts 22:47). The
        Lord&apos;s church, as described in the New Testament was not splintered
        and divided, but was <b>&quot;one body&quot;</b> following{" "}
        <b>&quot;one faith&quot;</b> (Ephesians 4:4-6). Religious division was
        condemned (1 Corinthians 1:10). It is our aim to be nothing more and
        nothing less than simply a congregation of Christians who are members of
        the Lord&apos;s church. We are not a part of any denomination. We are
        not Protestant, Catholic, nor Jew&mdash;we are simply Christians.
        <Image
          src="/open-bible3.png"
          alt="open bible"
          width={120}
          height={77}
          style={{
            maxWidth: "100%",
            width: "auto",
            height: "auto",
            float: "right",
            marginLeft: "auto",
            marginBottom: "0px",
            marginRight: "-14px",
          }}
        />
      </AccordionPaneSegment>
    </AccordionPane>
  );
};

export default HomeAccordion;
