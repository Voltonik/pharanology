import React from "react";
// react-router-dom
import { Link } from "react-router-dom";
// react-bootstrap
import Card from "react-bootstrap/Card";
import "./why-us.scss";

function WhyUs() {
  return (
    <section id="why-us">
      <div className="container">
        <div className="row">
          <h3 className="section-name">Why us?</h3>
        </div>
        <div className="row section-content">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRgVFRYYGBgYGBgaGBgaHBkcGBgYGhkZGRgYGBocIS4lHB4rHxgYJjgmLC8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHzQrJSs0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDE0NDQ0NP/AABEIALcBEwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAFAAIDBAYBB//EAEMQAAIBAgMFBQUGBAQEBwAAAAECAAMRBBIhBTFBUWEGcYGRoRMiMlKxQmLB0eHwFCNykgdTovEzQ4LSFRYkJTTC4v/EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBv/EACURAAICAgEEAgMBAQAAAAAAAAABAhEDIRMSMUFRFCIEYXEFMv/aAAwDAQACEQMRAD8AvGNjmMaTEIY0bHmNMAGtIHkzmRNASIHWZDtOv8x/6EP1mxaZPtMvvn+gfUxjDXZk3op3Qzg9t0S5TP7y3vobab7GAuyr/wAhfH6yltvZ5puWpMBm1Iv7w526SHobZ6JRxSNuYH6yyrzy3AJUdrJmVhvYk3PjNpS2gtJAKrrcDUk6kgco1LexLZoC44mIOOYnl+3u0vtGIQkDSxBI1W9m0+m7jIU7Y1+JX4bDS2t9G7/SVY6PUjiE5jWcTFI2gYHhoQdZ4xidr1XuGckHhwlZMW62yswtyJELYUjebOX/ANyrfvlN2o0niGD2jUV86s2bnxPfPRuzvaX2mVKrKrnQg3VgQOR5mK9jrRqQJ0CVmxQzBVs17311EsZoxDrTtpxTHNpABto0iSBSd0ayHlADEdvj/wAAff8Awjuwqe7VPOofQCR9vAfaYcEW1Y+ksdhv+E551GikNGpMYRHExhgAwiMIkhjGgMjYRhg7Gbfw9NyjuAw3iQf+ZsL/AJogFhUzjQSe0uG/zBGP2jw3+YJIyhjMac7e62+KVm2vSJJzjUn6xQ2GjXFowtM7hO0ntPgpE2+9+kIU8XVbdR/1/pKozCBaMLSFVrn/AJS/3/pOnD4g/wDLT+//APMdDHsZGzTv8Hif8tP7z/2xpwGJ/wAtP7z+UKEMYzK9pR7/AHofrNWdnYn5E/vP5TibIR9a9MF0JW2Ylbb4JMLAvZFv5Q7z9Ybwuxw2LSs5DJcBkO47x5RtZKWHACUwL5t3wiwv73KB9sbXZUZVZWzaXGluYG/lzkNeGXGu5F2m2yP4h0w5yUwxU2sCbGxyngJl8QxLEm5O8k7/ADkoAYC/Mn04+XrIDcjXfrr+caVA2V2nI9o2UScnbxEThEAOq1tZP7ZyQSxJ4G+srxwaAI3nYZA+ZixzLuseBm3FaeQbI2pWoEmmfiFiCLjpDw21jj9hPL9ZK0UejLU6zlKuGvZrkGx6GedvtjHEWyL5frKqYnHC9gRc3NramFuwpUeu4F7g98nZp5hgO0WOpKV9irXN7km8sntfjuOGXzMdiod/iJU/n4ccg5+kj7EYr+WyW3OTfnfWZrtDturiKimpTCMikAAncePpItmbTqJlVDYX5c+JiY1R6qaoAuTaJagIuDcTJLtZERiX9pzBtpBw7RuMyKtlt7pHCMTZtnxShstxflHvUFp5odruzh397W1r2lrtFtF0VFR2GbU67ukFsLAXaCrnxNRvvn00lDLE7kkk6k745KluEbEhlorSU1RynC45RWx0iKKSZhyijsKNP2MsS4PMGegYWmLTF7Bw6phXcAiqSSCATdRu6Wml2Zh8e6o/sBkZQQQy3I4E6xJ7MlO21TNDSQSwiCRYbB1raoR4j85bp4Z/kPpLLGimJ32chq45EYo7hWG8E2k2Hf2ik0yGAuLjUXHCAHPZwJjVs794P+n9JaxD4tb2oX1FrEajjxlDE1GLuHUowyXB7jygpJscotLZl9v4kl8oF7Af0g34+UyOOqa2PC+7nNZtVQzudNCBr69271mZxeEYliqkgak6285kpfZmjj9VRVA9y+7lGMwA7xE40t6SIDn4SiRhM5aS5Y0iFioSC+k7WSx8JewFAfE3CVa5uzeP+0lSuVFuNRtlYTqick+GwrvmyC5VSxA35RqTbjYCWZhrYlHIBUcgpmCniRfQHzIm9TCi26ZnsphGCq7r7j6L1I36HumsSoLkHhEUcXDLyky4QcpNRtLKLARTGEHKJsIvKX7TjJHQjyvtXStimA4IJLgKR/h8ypqL2b63i7Vn/wBVV6Io9JqOylIGgoI0ZR+sGJHnz02XRri+vfLFOmCgUNdr7pq9q7DLg20yaAc9ZRw3Zo8DpcHNxksoD4fDtoCl7NykPadcrqv3bzeUcEFAEw/bD/5FuSiUkSAZyKKMBRTs5ABRRRQA9F2B2gqJhhSUIVswuVudb31vPTuyr5sLS6IB5aTxbYbXQjkxnsHYh74VejOPUwGHF498cN04u9vCdEYHnHbRLYknmin6wp/h4/uVByqH1AMp9vEtVQ80+h/WS/4dv/xh99T5qPyk+QRuawmI7Q6Yh+qIfVxNxU3CYntWLVr86Y9H/WNCfYxmPWzMxJva45brWB6fjCuysIGwzrbUlSd2twdPSDsXhHddFNtbk6LwO/yh/AUGo0FKuHYhcykWDAA2AO8NrpffMZRuzojKqPOnwwYtYWH2Vvc6b734xq0BlYAa28e6aHaDJnLiyo4AvuKuMxs3DUcYKbLdgqsxy7gOO8k6bvOQpNmvSkQPgwRccR4SF9nZVJMOrYAEqF0FtR6CdxdIFDM+SSdGnFGSsobIoCwvva9unWC9oYYrUddL5jumo2VXQ5KdruqsV5a2BN+mnnKW2sCFq3GpZQ3jcgn0mmK3JmedpRSRlVom40IBNrkaTWdg9kGpUdxvRXSx+EsylbN01BncLhNB9Jo+ydZKNV865c5Wz8N1rMOA6zoOQl2Tsd8M6U3KlAAVtwIFmvzuTv7p3EVw9V2UWF7eWk0mPprnZuQNu4i88/faypUVDua9zy1kt7LS0a3BmEEgjAYtGAsw84USoOYgiWTgTjCMR98e7aSkxNUeUdozfEYk8so9BNzsWhkpov3R6iYHazZquJPOoB6gT0xaf8tCOCgHutEwRzE0PcLcWYA926JEAUCL24Yol9wJIi9oLQQMYUnmfbJG/iWNjawseE9KZx1vMp26ceyA4lhKRJgZyKKACiiigAoo7LFADSbP2PWuQadawIIOVlufLUT07sfQDYcpVLoVckDMyEggcrXG+T4eo9uEbnY3sB6zl536On48fYcr4em4CF3AAFirsraaasDcxzYamUCGo4AN7h2DeLXuZnxiWvaw9ZDicUQtygPvAWvzNrw536HwL2Ve3uEuKQp53srqSCWIBtqTz0lX/D/ClGqI+dR7hBa6k7768eENrVYDcsgxGKdfsg90HnfoFgXs0+JoI6BRVdbG91YXPQkwZjdlozoXdnCqVsd7XIPvEcNJHszCs38x1yi11U8epHKNxGLubidGNuS6mjnypRfSmCO0JOZUUCxDKBooBOUWGnO2njvEqYKsAiqeGmv3dPwhHbFLOB1sQeREFYtLJfja/jx3y2t2Spaon7RbDUU6jIoUsgYhRbMoIJHr6TLJgCxDK+VshJOoHKx423+U9QqjNQDAA3Rb3+UgE/hMHisJlfN8AV23EH3TvAGvDrOOetHbD7bINnbHy2eoxJtotrAfmZW2lqdN0IVNogjLe5HHpwv1gPamK0sN/HumdNyN7UYknZdc+KNty0mv3lltDm18N76NzQjyIP8A9pW/w/whtWqkbyqDwuzW8x5TQ7Swt0Vvlf0YEfXLOmOmjiyO0wIlK2k662BMkQ3ZumkVQe8q9Cx+g+vpOitHPey9s7aBVGRzuUlP+2YLGYSo7hihFvzm0wVHNUUEXBvfyMsY7DsmosVOoP4HrOXLKUXpHViUZKmzD/wjj4UYaczviptiEvo9rc206zRvXbOFsNRmlrI5HATHlfo24l7Amytr1EqEMzstuINr+M0A7Qaao0pVqDcQJFkawAF+sfO/CEsCrbMljKjB3up998/reb7DdpVKAZW3AekAY1WQXZQRcDzl9aTEA5RKeZ96JWBeyQ41yzMAN2/pIf8AxtxoUuBxG+d94aZREyOfsiTzMfBHyxv/AJlUWGR83dpAnaHFviABkKgG8MNTbiolfEVygF13m0pZ5eEL48fLMWcOwNrGI4Z+RmxdSfsCQimdfclc79E/HXszNDBM3TvnK2FK9Zp1uNyCNdj8ghzv0HAvZlbmKaaw+QeU7Hz/AKFwfs9VVbCRu4G7eZwVQRIWPHjOSzpo65F4GrOVpuSxNnJ14We8LOQRB9fC2Sqb3zZiBy0/SNMBuGqZndgxtmX3eG7fNTg9nWs7jW2incORPM9IO2DssM/t3NlKplX5iONuQmkxWKB+HXrN8UE/szDLOtRKOOxIUhOJ+I9/CZyu2Vyp5yatjVqZ2RgwVmUkX0ZWKsPD9ZTxz5grjfuPeJ2RejjktlvEt7qnrI8TTDJ0IjFfPT6gx+z6uYFD4SiQzs7HUkooHdF9xQQWF9BY6bzumZ7TbNXKalN2CG7WB0tbfc623TmE2UXxB4KNXPS+gHU/nNLWwysrU2HukWtyFraeEwnFdjoxya2eTYfEqy+4pF+Lan0nE2czkC2pPmTuElxODbDV3otqFN1PzIfhP4d4M1XZLDCpUzn4UH+o7vIX9JztPqpHX1Lptl6vQbC4T+UBdBdri9/mbzN+6DaO1KlVPfK5d/ura5GutyZqNtuqUXLbspHeSLAdSd0xdCnkponEgX/GdUEjhnJlrCLpfnrI6LZqj9Mq/ifrLagKpPIQRs2pdXf53AHczflNTI0uyaN3DcACfwhB6AdGRtzXseIvxEdgKAVNd7SwaenKYT2zeGkYHFU2p1sjb1S1+eu+S7LxBIGY31MMbcwGdPaKPfUeJXfaBtk4cqBm5TknGjthLqCD6mNWkAdJxvxj3eYmgK20bqg5uISp2sBBe1HuaY+/CSJpeW+yEu7Iaps1pL7TSQuRmvOMdJIxj1LQHWqMzgE6Z/pCtQ3MENTYOt/mYzSJEi09Vs5AOlpNTuFN+JkCU2zMx3aSctoIpBEedJVzb7yZzuleo+to0gbHZopVq1tTFLoz6j0XDt10IBjqraab4NwGKUolyL5RLL4hbb5ibEyHhDaYFE+MZzxH2eo6zOJWF5qKVYOiuNSR739Q0P76zXCk27MczaSocuK4bgLWA0AWxsAOWloPx2IyMMo3k3Nz04HS2phfDUABmP8AsIOx9fMCEUHq3HuE6XpbOdK3o832fiDhsY9Fj/LrONeALk+zceeQ9QIXwuMBd6RN73y96/mLyWorpXSs1DMFuraXBR7Byl/tDQ26dZnduUzh8UXVro5Dow3d3Tdu/OXCSZnODRo8LXykrHCrkcEc4IbFgkMNxFx4yWpiQRNTIP4l2BFWmbHjy6gjiIYw2NFUBvhbiOHhzmTwGO3qdxl5MSF04cJMoqQ4yaKfb7Z2en/EIPepfFzKbz5b+68v9m2GHwq6ZnKl3HAM1rBjzAyi3SJNpjVKhurbmPXerfgZRbEezV0J0zAqeaWv9TbwmKj9qN3P6jcS71Wz1mvb4V3Kv9K/jvkOFGdi3DcO6Vq+IL+6N0I4cBFm6MGQ7Yq5UYDfa3nBaVPZ0lYglUdGewJsgYZybcALmLamIzMB1+ku7IQO60zaxuSDuZVGZlPQhSIm9DXc29GpcAjUEXBvvB4iTshty8bD6SLDrlAVAAALAAWAH5RtEq5P27b2O4dFH4zJmyGtRQ72W/RoLx2zAouh/H/aXcftimg0988ltb+7d5QOm30clSChOguQVN+FxuPfMpdL0zWPUtoptv8AGR1Eux7pYxrjMDzEpGuLnUTlap0dSdqwbjxapTHUw0re7AeJfNWTxhcsLWuIS7IS7srs+vjFVfSV/aakGcqVbQoqxI1zKlcj2oHJTLCneZTY3qk8MolRREmW2f3Y1jujHFgBeNZusdBY6q8qk6zrN1ldn+ktIhsgrVfePfFGKYpoZm62dgvZAC5e19Ta51vzhJMQo+xfxESsOQ851m6eVpk0i02dNdT9j6S3hcayfCpsd4/GUww5GO8G8oLTtDe9Ms7c7SZKKAKQWqqjn5UsWZu73cvjLmGrhwCDe438NYExFAOLMCR1EhwytSINM2F9VPwkcRbh4RudvYlBJaDlbEGzOoDKgvY34X6d8zO2sWaZLZytViCdfdN+APIbuekMVsSHR0Hu57Ei2h4+I13TLbWz57VFU3G9DcZeqn8zDq0Uo7K2MqNUXOLlha/XpeUqdd+Imo2fs5f4fKSMjve6/EliALHju3cLwxgNk4dbe5mPNyT6bvSb43JKkc+ZR6jCJiiP2ISpbRBFmvN5WwNJ0KMi5T9mwHiLTK7T7O1KV3pE1EG9Tq6jp849e+aScktUzKMYN7tApsYsq1MVc31PnLlOnmFwQfwI3gjgekT4Q9PSY879G3AvZDhcSo1M7jdqaWUHyM7/AApvaw9ImwjfKCIfI/QfHXsDHEktfK3kYY7MYonFUiQQBmvfQaqR+MjaiR9kRgQ/LDn/AELgXs3u1saKSXzAqb8LnTgbGZjE7Rd3SgCRTN3qH52azBCeCC4FuNoOCn5Y5a9ZRZHdV5Am3lJlksuOPpNBUpBhaAdrYUrw3y52fxz+0Wm/vZrhW4jQmx8ppMRs8OLWEzSo2bMNTrh1BcnMBl8F0B8oyoyc4dx/ZnewNiOW494/GCaOxaj6oMw8Qf34wpN3YW0uxQDqCfSSs6fN6y3idkPTW75R0ub+GlpTydD5CFIVtCJT5oxynOPFPp6D8o72Q+X0EKQWVQ684xmTnLZoj5R5TnsF+UeUeidlJmX5oxsvzQiKKcVXyjTh0+UeRlWhUwecvOROy8DCj4RLaL9RIHwqfL9Y00JplH3ecUtfwi8j6xSrRNM3Kkc/WPvyJlYMOC3k4qdB5zJsuh4cjexEcMV94+R/KNFRY5XHOKyqGnFN8wnP4v7wiD3O7Tnp9I5FUG9r94isaJMNUpu2WocpOiuDa3RgdCNd+8d26xiezIzG7uT4bumkrEKfsjyhvZO0hYU3+HcrfL0PSaY5RupIjJGVXFlHD7HCJkW+XNmsddefSXFoWsIYqUrSLIDutOvpSORuytSp2txt3Syjd1ovZxwpcbxiA21dgJVJdDkqcx8Lcg44/vdMnilek2SqmU8D9luRB8/I8p6Pl4SGpg0a2dA9jcZ/fseYzXtvmU8cZf0uGSUf4eeq991z3XMkFBz/AMt/7X/KeiKgAsAB0Gka4mfAvZrzv0edpgmd1RablzuU6E8TvtpDNLstUUXZkU8rlvwtNJcqQRvEKUmWovXiPylRwx8kyzPwefv2bcH4082H4SE9n6h3Fe/NNxicJaUalK0HhiCzSM1g+z1RKiOXSysCRckkct0KY/ElBmuoCjMQSAWUEBgo3k+8O64l4NwOv4SHE4AOQPdYHQ3G4b9fykyxpLRccjb2CNn7aXEF6JHvKpZT83Md+79iUMLtCtTzIiBwCTbMFPOwlSrgfY4ovTByo4uBa33139/nLePwwFey3Adcy8m46W6TPp2jfq0x+Ixf8ThS7DK6OwZflsb2113EeUzK115zWtgr0GRWykuSxtckty7pnK/Z6umqpnHNd/8Abv8AK8fSyJTWkQrWHSO9tLWF7P1m+PLTH3jdv7R+JEPYHZGHp6ke0bm9svgp087xrG2S8iRm2Rsoe6hTuJ3HpfnICeo8Lz0X25YZcgy8rArb/q0tB2L7OUX1A9m33Ddf7Tp5WjeJ+CFmXkxLt1EaG7vDfC+O7M1kuUyuPu6N/aT9LwKyFCVYENyIsR3giQ413NFJPsP9qOvpGPVH7Mhcd0hNPnGkgbZa9oP2RFKPsopVIm2bpX6R4ccpVDmNFY33TOiy5cco9bcpWWtpqPCNXFdIhlwP0PrEa67tfWRLXBnGqiSUWM46+sWaUnxajewHeR+cv9nsQr1Rlu2VWOg05bzpxlRhJ9kTKaSCFLbBWkUa50906XtxU3juzW0C7vTZbXUOmt7lTZh5MD4GGQ/3G/0fnJsO7Aj3Lc9Ru47p0xjJVs5pOLvQ606BHOtiROCbGRy0QnYoAcIiKzoM4zWgBDUp3jKTlDcSdj0lep4eGsQBmky1F68ZTxOF6Snh65Uw3Sdai9YAZ6rh+voJGPdNx9IexGHtw8oNrUjyiaGmCjgqZuQgBJubaXJ1Jj1waWCkAgAgXGqg/KeGok7p0H78I0X5D1k0ilJrsD8XsR2S1KrkP2vdBv0Un4T3g+En2VsurTAzVSRxDe/+QXwhBWbnJAnMkykkS2NqUkOjAHvF5E+AH2dOnCOrVUT43VPHU+e/ykNPHhjlpKz9Tovfrr5AR0IjfCuOP774xqLfN5QtTwrHV2ueQ0UeG8+MVbC3FrkdRDpCwQqEcz4/hK+KVHGV0DDkVv5aaQwmz1XcNeZ1bzMr1sOb7rcL2v434RdI7Mniez9B9ULoeViy+Ta+sG4jsxUHwMjjxU+ot6zdNhOpPPr4cJG2EtJcEUsjR55/4DX/AMo+a/nFN/7Hr6xSeMrlZmPZ9Z32fWc9qL2It1kwtbeDOZnQRlL8YhTG+S5R0nAoG60RRT2kzKhZCLjf/SdL+BtAh2iCnv52fMPtWTLxFhr/ALzTul9CARqCOYOhB8INamKDmyKdCNRwNiGHW1vWdOPNjhFdS2TH8XNnk1jBGHxFRjalTF/upmbzM2/YbC1lNR62YXChQ2/eSxtw4eUAjadQgBWyjdZQF+k2nZhD7EMxJLsxJOvQfSWvy+R9KVFZ/wDNn+Pj5Jtd6oN3jlMjEcso4CxWFwG8D3j9JXJlmmLqV8R3iVmjA5mPMTuW++/0jSx4CIKYwHAW3W+sfvEaKfMxyoBABuURjJ08zJjInxCjjfu1gBC1I9BH0KhQ3Eq4jaiILsVUc2YLKD9oKPzqf6QzfSIZs6FYOOvEQbtbGJSBzEC2pubAd5gnAbYBIKZz/wBDgeogjH7HrV6jO75lzHIu4AcDbn1gIgx3a1R8CF+X2Qe64JPkJFhtoY2pqERF6hifrDOB2CiakZm5ncIVp4YCOgsD4ejiW1aoqjogv5m9pYfZzMLPVqHubJ6Jb1hUryldnzaJr14frADO1+ztFTnGZW+bMb+Z1PrCeyq2T3dWHO1vXcZdGEAN294xrp++H6xAF6NdW3Hw4yQpAGo3fvwlqjjmXfr++cdioJMkgZI6njFbp++ckjArGnIK6AAkwgVkTrAAP7Ood1gOAtuihPIYoqFZgvZiJwAJyKcB3iAvuncvWKKIoQBkG1aeZVbitlJ5g/D5ajxiikS7HZ+DJrMqBlMT0nZVPLRReSD11iil/i/9M6f9pvij/WXRHiKKdx5skovYgzlZbMROxRgQxprAbz6RRQARr6XteVcTiKgW4yqLgcTqTYaC05FJGge5ZrlsQQLAnIlrA7vivM//AIgYVmpU6tOoygWzAMyhlYaEgHfe3mYoojRbaszvZzEGkffAqIT7yNr4qTuM9L2bh6TqHpAZeIItY8oopOOTb2PJFJF9EHCSoIopsYjxOO4UXMUUBFexqb9F5SYAAWGnWKKADD+/15yKowALHcBqeMUUABRxDVdU9xOf2m/KWCy3F9+4b99ooohia4k1LFsvHT08oooAXaGOB36H0lgveKKUIWcRRRQA/9k="
            />
            <Card.Body>
              <Card.Title>For Students</Card.Title>
              <Card.Text>
                We have the simplest UI for students to solve their exams.
                Unlike{" "}
                <span className="text-decoration-line-through text-danger">
                  paper exams
                </span>
                , you can change Multiple choice question (MCQ) answers without
                worrying!
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="data:image/jpeg;base64,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"
            />
            <Card.Body>
              <Card.Title>For Teachers</Card.Title>
              <Card.Text>
                We have the simplest UI for teachers to put their exams. Unlike
                the{" "}
                <span className="text-decoration-line-through text-danger">
                  paper exams
                </span>
                , you can grade your students questions with and give them their
                grades with only{" "}
                <b className="text-primary">a press of a button</b>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="row d-flex justify-content-center align-items-center">
          <Link
            to="/sign-up"
            className="btn btn-primary btn-get-started fw-500 text-uppercase"
          >
            Get started
          </Link>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
