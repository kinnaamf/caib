<template>
  <div class="bg-[#EEE] w-screen min-h-screen relative background flex items-center justify-center px-[260px]">
    <the-ellipse size="350px" class="absolute top-0 left-0 -z-10"/>
    <the-ellipse size="290px" class="absolute bottom-0 right-0 -z-10"/>

      <div class="flex gap-8">
        <member-card
            v-for="(memberData , index) in membersData"
            :info-text="memberData.memberInfo"
            :member-name="memberData.memberName"
            :image="memberData.memberPhoto"
        ></member-card>
        <members-info-card :title="cardTitle" :team-info="cardText" @request-scroll="$emit('request-scroll', $event)"></members-info-card>
      </div>

  </div>
</template>

<script>
import TheEllipse from "@/components/TheEllipse.vue";
import NextSectionButton from "@/components/NextSectionButton.vue";
import MemberCard from "@/components/MemberCard.vue";
import InaBostan from "@/assets/members/ina.png";
import MarinTuruta from "@/assets/members/marin.png";
import MembersInfoCard from "@/components/MembersInfoCard.vue";

export default {
  components: { MembersInfoCard, MemberCard, NextSectionButton, TheEllipse },
  data() {
    return {
      MarinTuruta,
      InaBostan,
      membersData: [
        {
          memberName: "Ina Bostan",
          memberInfo: "card Ina",
          memberPhoto: InaBostan,
        },
        {
          memberName: "Marin Turuta",
          memberInfo: "card Marin",
          memberPhoto: MarinTuruta,
        },
      ],
      cardTitle: "Echipa noastra",
      cardText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt tellus eu luctus commodo. Ut venenatis volutpat tortor, nec maximus urna ultricies nec. Curabitur sit amet laoreet augue. Phasellus vestibulum neque enim, quis facilisis lectus placerat eu. Proin gravida finibus enim suscipit feugiat.'
    }
  },
}
</script>

<style scoped>
.background {
  background: rgba(238, 238, 238, 0.7);
  box-shadow: 0 0 200px 0 rgba(0, 0, 0, 0.10) inset;
}
</style>
