function skillsMember() {
  return {
    restrict: 'E',
    templateUrl: 'templates/skills/member.html',
    scope: {
      member: '=',
      skills: '='
    },
    controller: function ($scope) {
      $scope.getSkill = function (id) {
        for (var i = 0; i < $scope.skills.length; i++) {
          if ($scope.skills[i].id === id) {
            return $scope.skills[i];
          }
        }
      };
    }
  };
}