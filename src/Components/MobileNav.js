import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure
  } from "@chakra-ui/react"
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon
  } from "@chakra-ui/icons"
  import Logo from "../Assets/logo.jpg.jpeg";

  export default function WithSubnavigation() {
    const { isOpen, onToggle } = useDisclosure()
  
    return (
      <Box>
        <Flex
          bg={useColorModeValue("white", "gray.800")}
          color={useColorModeValue("gray.600", "white")}
          minH={"60px"}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.900")}
          align={"center"}
        >
          <Flex
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "none" }}
          >
                                {/* <span> <button className="navbtn">Lets Connect</button></span> */}

          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
            <Text
              textAlign={useBreakpointValue({ base: "center", md: "left" })}
              fontFamily={"heading"}
              color={useColorModeValue("gray.800", "white")}
            >
              <img src={Logo} alt="" className="" style={{marginLeft:'-80px' ,width:'200px',height:'45px', marginBottom:'-30px'}} />
            </Text>
  
            <Flex display={{ base: "none", md: "flex" }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>
  
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
          >
            {/* <Button
              as={"a"}
              fontSize={"sm"}
              fontWeight={400}
              variant={"link"}
              href={"#"}
            >
              Sign In
            </Button> */}
            {/* <Button
              as={"a"}
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              color={"white"}
              bg={"pink.400"}
              href={"#"}
              _hover={{
                bg: "pink.300"
              }}
            >
              Sign Up
            </Button> */}
                      <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Stack>
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    )
  }
  
  const DesktopNav = () => {
    const linkColor = useColorModeValue("gray.600", "gray.200")
    const linkHoverColor = useColorModeValue("gray.800", "white")
    const popoverContentBgColor = useColorModeValue("white", "gray.800")
  
    return (
      <Stack direction={"row"} spacing={4}>
        {NAV_ITEMS.map(navItem => (
          <Box key={navItem.label}>
            <Popover trigger={"hover"} placement={"bottom-start"}>
              <PopoverTrigger>
                <Link
                  p={2}
                  href={navItem.href ?? "#"}
                  fontSize={"sm"}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: "none",
                    color: linkHoverColor
                  }}
                >
                  {navItem.label}
                </Link>
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={"xl"}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={"xl"}
                  minW={"sm"}
                >
                  <Stack >
                    {navItem.children.map(child => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    )
  }
  
  const DesktopSubNav = ({ label, href, subLabel }) => {
    return (
      <Link
        href={href}
        role={"group"}
        display={"block"}
        p={2}
        rounded={"md"}
        _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
      >
        <Stack direction={"row"} align={"center"}>
          <Box>
            <Text
              transition={"all .3s ease"}
              _groupHover={{ color: "pink.400" }}
              fontWeight={500}
            >
              {label}
            </Text>
            <Text fontSize={"sm"}>{subLabel}</Text>
          </Box>
          <Flex
            transition={"all .3s ease"}
            transform={"translateX(-10px)"}
            opacity={0}
            _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
            justify={"flex-end"}
            align={"center"}
            flex={1}
          >
            <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    )
  }
  
  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue("white", "gray.800")}
        p={4}
        display={{ md: "none" }}
      >
        {NAV_ITEMS.map(navItem => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    )
  }
  
  const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure()
  
    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
          py={2}
          as={Link}
          href={href ?? "#"}
          justify={"space-between"}
          align={"center"}
          _hover={{
            textDecoration: "none"
          }}
        >
          <Text
            fontWeight={600}
            color={useColorModeValue("gray.600", "gray.200")}
          >
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={"all .25s ease-in-out"}
              transform={isOpen ? "rotate(180deg)" : ""}
              w={6}
              h={6}
            />
          )}
        </Flex>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={"solid"}
            borderColor={useColorModeValue("gray.200", "gray.700")}
            align={"start"}
           style={{marginTop:'-12px'}}
          >
            {children &&
              children.map(child => (
                <Link key={child.label} py={2} href={child.href}   className="hoveroption">
                  {child.label}
                
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    )
  }
  
  const NAV_ITEMS = [
    {
      label: "ABOUT",
      children: [
        {
          label: "About Us ",
          Link: "https://648ad95bf91a610482585ac0--storied-genie-6eeab0.netlify.app/"
        },
        {
          label: "Our Ventures",
          href: "#"
        },
        {
          label: "Partners",
          href: "#"
        },
        {
          label: "How Its Works",
          href: "#"
        },
        {
          label: "Life At Askari",
          href: "#"
        },
        {
          label: "Contact Us",
          href: "#"
        }
      ]
    },
    {
        label: "CAPABILITIES",
        children: [
          {
            label: "Software Development",
            href: "#"
          },
          {
            label: "Ecommerce Development",
            href: "#"
          },
          {
            label: "Devops",
            href: "#"
          },
          {
            label: "Quality Engineering",
            href: "#"
          },
          {
            label: "Cloud Application",
            href: "#"
          },
          {
            label: "AI",
            href: "#"
          }
        ]
      },{
        label: "DEVELOPMENT",
        children: [
          {
            label: "Explore Design Work",
            href: "#"
          },
          {
            label: "New & Noteworthy",
            href: "#"
          }
        ]
      },{
        label: "HIRE DEVELOPER",
        children: [
          {
            label: "Explore Design Work",
            href: "#"
          },
          {
            label: "New & Noteworthy",
            href: "#"
          }
        ]
      },{
        label: "INSIGHTS",
        children: [
          {
            label: "Explore Design Work",
            href: "#"
          },
          {
            label: "New & Noteworthy",
            href: "#"
          }
        ]
      },
      {
        label: "SOLUTIONS",
        children: [
          {
            label: "Explore Design Work",
            href: "#"
          },
          {
            label: "New & Noteworthy",
            href: "#"
          }
        ]
      }, {
        label: "ECOMMERCE",
        children: [
          {
            label: "Cross-Platform Enterprise App Development",
            Link: "https://648ad95bf91a610482585ac0--storied-genie-6eeab0.netlify.app/"
          },
          {
            label: "Mobile UI/UX Design",
            href: "#"
          },
          {
            label: "App Porting",
            href: "#"
          },
          
        ]
      },{
        label: "APP DEVELOPMENT",
        children: [
          {
            label: "Cross-Platform Enterprise App Development",
            Link: "https://648ad95bf91a610482585ac0--storied-genie-6eeab0.netlify.app/"
          },
          {
            label: "Mobile UI/UX Design",
            href: "#"
          },
          {
            label: "App Porting",
            href: "#"
          },
          
        ]
      },{
        label: "CRM & ERP",
        children: [
          {
            label: "Cross-Platform Enterprise App Development",
            Link: "https://648ad95bf91a610482585ac0--storied-genie-6eeab0.netlify.app/"
          },
          {
            label: "Mobile UI/UX Design",
            href: "#"
          },
          {
            label: "App Porting",
            href: "#"
          },
          
        ]
      },{
        label: "SALESFORCE",
        children: [
          {
            label: "Cross-Platform Enterprise App Development",
            Link: "https://648ad95bf91a610482585ac0--storied-genie-6eeab0.netlify.app/"
          },
          {
            label: "Mobile UI/UX Design",
            href: "#"
          },
          {
            label: "App Porting",
            href: "#"
          },
          
        ]
      },{
        label: "CUSTOM",
        children: [
          {
            label: "Cross-Platform Enterprise App Development",
            Link: "https://648ad95bf91a610482585ac0--storied-genie-6eeab0.netlify.app/"
          },
          {
            label: "Mobile UI/UX Design",
            href: "#"
          },
          {
            label: "App Porting",
            href: "#"
          },
          
        ]
      },{
        label: "ECOMMERCE",
        children: [
          {
            label: "Hire Flutter Developer",
            Link: "https://648ad95bf91a610482585ac0--storied-genie-6eeab0.netlify.app/"
          },
          {
            label: "Hire Kotlin Developer",
            href: "#"
          },
          {
            label: "Hire Swift Developer",
            subLabel: "Up-and-coming Designers",
            href: "#"
          }, {
            label: "Hire Ionic Developer",
            href: "#"
          },
          {
            label: "Hire Ionic Developer",
            href: "#"
          }, {
            label: "Hire React Native Developer",
            href: "#"
          }, {
            label: "Hire Ios App Developer",
            href: "#"
          },{
            label: "Hire Android App Developer",
            href: "#"
          },{
            label: "Hire AR App Developer",
            href: "#"
          },
        ]
      },{
        label: "MOBILE",
        children: [
          {
            label: "Hire Flutter Developer",
            Link: "https://648ad95bf91a610482585ac0--storied-genie-6eeab0.netlify.app/"
          },
          {
            label: "Hire Kotlin Developer",
            href: "#"
          },
          {
            label: "Hire Swift Developer",
            subLabel: "Up-and-coming Designers",
            href: "#"
          }, {
            label: "Hire Ionic Developer",
            href: "#"
          },
          {
            label: "Hire Ionic Developer",
            href: "#"
          }, {
            label: "Hire React Native Developer",
            href: "#"
          }, {
            label: "Hire Ios App Developer",
            href: "#"
          },{
            label: "Hire Android App Developer",
            href: "#"
          },{
            label: "Hire AR App Developer",
            href: "#"
          },
        ]
      },{
        label: "FRONT END",
        children: [
          {
            label: "Hire Flutter Developer",
            Link: "https://648ad95bf91a610482585ac0--storied-genie-6eeab0.netlify.app/"
          },
          {
            label: "Hire Kotlin Developer",
            href: "#"
          },
          {
            label: "Hire Swift Developer",
            subLabel: "Up-and-coming Designers",
            href: "#"
          }, {
            label: "Hire Ionic Developer",
            href: "#"
          },
          {
            label: "Hire Ionic Developer",
            href: "#"
          }, {
            label: "Hire React Native Developer",
            href: "#"
          }, {
            label: "Hire Ios App Developer",
            href: "#"
          },{
            label: "Hire Android App Developer",
            href: "#"
          },{
            label: "Hire AR App Developer",
            href: "#"
          },
        ]
      },{
        label: "BACK END",
        children: [
          {
            label: "Hire Flutter Developer",
            Link: "https://648ad95bf91a610482585ac0--storied-genie-6eeab0.netlify.app/"
          },
          {
            label: "Hire Kotlin Developer",
            href: "#"
          },
          {
            label: "Hire Swift Developer",
            subLabel: "Up-and-coming Designers",
            href: "#"
          }, {
            label: "Hire Ionic Developer",
            href: "#"
          },
          {
            label: "Hire Ionic Developer",
            href: "#"
          }, {
            label: "Hire React Native Developer",
            href: "#"
          }, {
            label: "Hire Ios App Developer",
            href: "#"
          },{
            label: "Hire Android App Developer",
            href: "#"
          },{
            label: "Hire AR App Developer",
            href: "#"
          },
        ]
      },{
        label: "CRM & ERP",
        children: [
          {
            label: "Hire Flutter Developer",
            Link: "https://648ad95bf91a610482585ac0--storied-genie-6eeab0.netlify.app/"
          },
          {
            label: "Hire Kotlin Developer",
            href: "#"
          },
          {
            label: "Hire Swift Developer",
            subLabel: "Up-and-coming Designers",
            href: "#"
          }, {
            label: "Hire Ionic Developer",
            href: "#"
          },
          {
            label: "Hire Ionic Developer",
            href: "#"
          }, {
            label: "Hire React Native Developer",
            href: "#"
          }, {
            label: "Hire Ios App Developer",
            href: "#"
          },{
            label: "Hire Android App Developer",
            href: "#"
          },{
            label: "Hire AR App Developer",
            href: "#"
          },
        ]
      },
   
  ]
  